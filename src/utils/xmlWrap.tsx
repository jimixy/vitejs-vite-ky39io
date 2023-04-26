import { lfJson2Xml, lfXml2Json } from "@logicflow/extension";

const xmlDecl = '<?xml version="1.0" encoding="UTF-8" ?>\n';

export const coverInXml = (data: any) => {
  const xml = lfJson2Xml(data);
  return `${xmlDecl}<root>
    ${xml}
</root>`;
};

export const coverOutXml = (xml: string) => {
  const data = xml.replace(xmlDecl, "");
  const json = lfXml2Json(data);
  return json;
};
