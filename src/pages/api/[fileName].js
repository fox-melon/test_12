
export default function handler(req, res) {

    console.log(req, res);

    res.status(200).json({ name: res.query.fileName });
}