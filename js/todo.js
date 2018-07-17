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
   

    var todoList = [
        {
            status:false,
            todos:" Parking Lot APP Refactor "
        },
        {
            status:true,
            todos:" Parking Lot APP 时序图 "
        },
        {
            status:false,
            todos:" Parking Lot APP 中类的流程图 "
        },
        {
            status:true,
            todos:" 总结Java和面向对象相关的概念和知识 "
        },
        {
            status:false,
            todos:" 总结Parking Lot APP开发过程中的问题和经验 "
        },
        {
            status:false,
            todos:" 总结TDD和Mock的应用经验 "
        }
    ]

    

    function buildTodoList(){
        str = '';
        console.log(todoList);
        for(let x of todoList){
            str += `<li id="${generateUUID()}" class=" ${ x.status ? 'checked' : '' }">
                         <input name="done-todo" type="checkbox" class="done-todo"> ${x.todos} </li>`;
        }
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