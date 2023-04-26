export function download(filename: string, text: string) {
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export const transformJson = (json: any) => {
  const nodes = Array.isArray(json.root.nodes)
    ? json.root.nodes
    : [json.root.nodes];
  const edges = Array.isArray(json.root.edges)
    ? json.root.edges
    : [json.root.edges];
  return {
    nodes: convertToNumber(nodes),
    edges: convertToNumber(edges),
  };
};

export const convertToNumber = (obj: any, keys = ["x", "y"]) => {
  const newObj: any = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (typeof value === "string" && keys.includes(key)) {
        newObj[key] = Number(value);
      } else if (typeof value === "object" && value !== null) {
        newObj[key] = convertToNumber(value, keys);
      } else {
        newObj[key] = value;
      }
    }
  }
  return newObj;
};
