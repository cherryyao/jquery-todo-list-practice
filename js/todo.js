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
            todos : [],
            status:"all"
        }

    function buildTodoList(){
        str = '';
        for(let x of Form.todos){
            str += `<li id="${x.id}" class=" ${ x.iscomplete ? 'checked' : '' }">
                         <input name="done-todo" type="checkbox" class="done-todo" onchange="checkItem('${x.id}')" ${ x.iscomplete ? 'checked' : ''}> ${x.content} </li>`;
        }
        return str;
    }

    window.addItem=()=>{
        const inputValue = $('input[name=ListItem]').val()
        Form.todos.push({id:generateUUID(),content:inputValue,iscomplete:false});
        render();
    }
    window.checkItem=(viewId)=>{
       let checkItem = Form.todos.find(item => item.id === viewId)
       if(checkItem!=undefined){
        checkItem.iscomplete = !checkItem.iscomplete;
       }
       render();

    }




    function bulidHTML(){
    let template =`
            <div>
            <input class="input-text" type="text" name="ListItem" data-com.agilebits.onepassword.user-edited="yes">
            <div id="button" onClick="addItem()">Add</div>
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