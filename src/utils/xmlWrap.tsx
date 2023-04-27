import { lfJson2Xml, lfXml2Json } from "@logicflow/extension";

const xmlDecl = '<?xml version="1.0" encoding="UTF-8" ?>\n';

export const coverInXml = (data: any) => {
  let xml = data;
  if(typeof data === 'object') {
    xml = lfJson2Xml(data);
    return `${xmlDecl}<root>
    ${xml}
</root>`;
  } else {
    return `${xmlDecl}
    ${xml}`;
  }
};

export const coverOutXml = (xml: string) => {
  const data = xml.replace(xmlDecl, "");
  return data;
  // const json = lfXml2Json(data);
  // console.log(34534, json)
  // return json?.root || json;
};
