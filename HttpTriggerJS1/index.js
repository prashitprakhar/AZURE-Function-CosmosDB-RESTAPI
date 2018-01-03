function tableRouter(context, req) {
    const res = context.res;
    const id = context.bindingData.id;
 
    switch (req.method) {
        case 'GET':
            if (id) {
                getOneItem(context, req, res, id);
            } else {
                getAllItems(context, req, res);
            }
            break;
 
        case 'POST':
            insertItem(req, res);
            break;
 
        case 'PATCH':
            patchItem(req, res, id);
            break;
 
        case 'PUT':
            replaceItem(req, res, id);
            break;
 
        case 'DELETE':
            deleteItem(req, res, id);
            break;
 
        default:
            res.status(405).json({ error: "Operation not supported", message: `Method ${req.method} not supported`})
    }
}
 
function getOneItem(context, req, res, id) {
    if(id!='undefined' || id!='null' || context.bindingData.statusCode==200){
    res.status(200).json({ id: id,
                        "name": context.bindings.documents[0].name });
    }
    else{
        res = {
            status: 400,
            body: "The Given ID is not valid. Please enter a valid 'ID'"
        };
    }
}
 
function getAllItems(context, req, res) {
    res.status(200).json({"AllInputs" : context.bindings.allsocuments });
}
 
function insertItem(req, res) {
    res.status(200).json({ body: req.body, message: "insert"});
}
 
function patchItem(req, res, id) {
    res.status(405).json({ error: "Not Supported", message: "PATCH operations are not supported" });
}
 
function replaceItem(req, res, id) {
    res.status(200).json({ body: req.body, id: id, message: "replace" });
}
 
function deleteItem(req, res, id) {
    res.status(200).json({ id: id, message: "delete" });
}
 
module.exports = tableRouter;