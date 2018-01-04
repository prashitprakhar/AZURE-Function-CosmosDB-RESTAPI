function restAPIRedirect(context, req) {
   // const res = context.res;
   // const id = context.bindingData.id;
 
    switch (req.method) {
        case 'GET':
            if (context.bindingData.id) {
                getOneItem(context, req, context.res, context.bindingData.id);
            } else {
                getAllItems(context, req, context.res);
            }
            break;
 
        case 'POST':
            insertItem(context, req, context.res);
            break;
 
        case 'PATCH':
            patchItem(req, res, id);
            break;
 
        case 'PUT':
            replaceItem(req);
            break;
 
        case 'DELETE':
            deleteItem(req, res, id);
            break;
 
        default:
            res.status(405).json({ error: "Operation not supported", message: `Method ${req.method} not supported`})
    }
}
 
function getOneItem(context, req, res, id) {
    if(context.bindings.documents.length >0){
        context.log(context.bindings.documents.length);
    res.status(200).json({ id: id,
                        "name": context.bindings.documents[0].name });
    }
    else{
        res.status(400).json({
            "body": "The Given ID is not valid. Please enter a valid 'ID'"
        });
    }
    context.done();
}
 
function getAllItems(context, req, res) {

    res.status(200).json({"AllInputs" : context.bindings.alldocuments });
}
 
function insertItem(context, req, res) {
    
    context.bindings.employeeDocument = JSON.stringify({ 
        id: context.bindings.req.body.id,
        name: context.bindings.req.body.name,
        age: context.bindings.req.body.age
      });

        context.done();
}
 
function patchItem(req, res, id) {
    //..
}
 
function replaceItem(context, req, res) {

    context.bindings.inputDocumentOut = context.bindings.inputDocumentIn;
    //context.bindings.inputDocumentOut.text = "This was updated!";
    context.done();
    //res.status(200).json({ body: req.body, id: id, message: "replace" });
}
 
function deleteItem(req, res, id) {
    res.status(200).json({ id: id, message: "delete" });
}
 
module.exports = restAPIRedirect;