
$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault()

        const Tarefa = $('#nome-tarefa').val()
        const novaTarefa = $('<li> </li>')
        $(`<p> ${Tarefa} </p>`).appendTo(novaTarefa)
        $(novaTarefa).appendTo('ul')
        
        $('p').on('click',function(){
            $(this).toggleClass('marcado');
        })
        
        $('#nome-tarefa').val('')
    })

})

