import userModel from './auth.model.js';
import { generateToken } from './auth.utils.js';
export async function registerUser(req, res)
{
    try{
    const { username, email, password } = req.body;

    const existingUser = await userModel.findOne({
        $or: [{ email }, { username }]
    });

    if (existingUser) {
        return res.status(409).json({
         message: existingUser.email === email ?
            'Email already exists' : 'Username already exists'
         });
    }

    const user = await userModel.create(
        {
            username, email, password
        }
    )
    const token = generateToken(user._id);
    


    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    })
    
    res.status(201).json({
        message:"User registered successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
        
    })
}catch(error){
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error' });
}
    

}