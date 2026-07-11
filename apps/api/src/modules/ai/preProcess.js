export function preProcessData(data) {
  console.log("Preprocessing data:", data);
  const aiInput = data.map((item) => ({
    title: item.title,
    text: item.text,
    metrics: item.metrics,
  }));
  const idMap = data.map((item) => item._id);

  return { aiInput, idMap };
}
