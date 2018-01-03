module.exports = function (context, req, documents) {
    //context.log('JavaScript HTTP trigger function processed a request.');
    const documentbind = context.bindings.documents;
    
    context.res = {
            status: 200, /* Defaults to 200 */
            body: {"name":documentbind[0].name}
        };
    
    
    //res.(documentbind[0].name);
    
    /*    for (var i = 0; i < documentbind.length; i++) {
            var document = documentbind[i];
            // operate on each document
            context.log('First document Id : ', document[i].id);
        } */

    context.done();
};