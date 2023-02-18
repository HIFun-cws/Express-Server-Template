import fs = require('fs');

export default function getHTML(type: string, title:string): string {
    let data: string;
    switch (type) {
        /*add HTML page types here*/
        default:
            throw new Error('Invalid type');
    }
    return data.replace(/<title>*.*<\/title>/,`<title>${title}</title>`);
}