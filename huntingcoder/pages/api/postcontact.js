import * as fs from 'fs';

export default async function handler(req, res){
    if(req.method === 'POST'){
       // const {name, phone, desc, email} = req.body;
       // console.log(req.body)
        let data = await fs.promises.readdir('contactdata');
        await fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body))
        res.status(200).json({success: true})
    } else{
        res.status(200).json(["allBlogs"]);
    }
}