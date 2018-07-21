$(document)
    .ready(function () {

function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        // code to be implemented

        const Form = {
            todos : [
                {
                    content:"Parking Lot APP Refactor",
                    iscomplete:false
                },
                {                    
                    content:" Parking Lot APP 时序图 ",
                    iscomplete:true
                }
            ],
            status:"all"
        }

    function buildTodoList(){
        str = '';
        console.log(Form.todos);
        for(let x of Form.todos){
            console.log(x)
            str += `<li id="${generateUUID()}" class=" ${ x.iscomplete ? 'checked' : '' }">
                         <input name="done-todo" type="checkbox" class="done-todo"> ${x.content} </li>`;
        }
        console.log(str);
        return str;
    }



    function bulidHTML(){
    let template =`
            <div>
            <input class="input-text" type="text" name="ListItem" data-com.agilebits.onepassword.user-edited="yes">
            <div id="button">Add</div>
        </div>
        <br>
        <ol>
            ${buildTodoList()}
        </ol>
        <div>
            <ul id="filters">
                <li>
                    <a href="#" data-filter="all" class="selected">ALL</a>
                </li>
                <li>
                    <a href="#" data-filter="active" class="">Active</a>
                </li>
                <li>
                    <a href="#" data-filter="complete" class="">Complete</a>
                </li>
            </ul>
        </div>
    `
    return template;
    }

    const render =() =>{
        $('#todoForm').html(bulidHTML());
    }

    render();


    
    
});