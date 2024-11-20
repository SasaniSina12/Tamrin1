let message = "this is scopt for local var";

function anyThingName() {
    let message = "this is scopt for global var";
    console.log("This is anyThingName scopr var(global)", message);
    function showMessage() {
        console.log("This is showMessgae function scopr var(global, local)");
        function initFunction() {
            let message = "This is local var";
            console.log(message);
        }
        initFunction();
    }
    showMessage();
}
anyThingName()