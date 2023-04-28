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
  if(!json || typeof json !== 'object') {
    return {};
  }
  Object.entries(json).map(([key, value]) => {
    if(key === 'nodes') {
      const nodes = Array.isArray(json.nodes)
      ? json.nodes
      : [json.nodes];
      json[key] = convertToNumber(nodes);
    } else if(key === 'edges') {
      const edges = Array.isArray(json.edges)
      ? json.edges
      : [json.edges];
      json[key] = convertToNumber(edges);
    }else {
      json[key] = value
    }
  })
  return json
};

export const convertToNumber = (obj: any, keys = ['-x', '-y', "x", "y"]) => {
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
