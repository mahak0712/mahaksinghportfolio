console.log 'Mehak'
ready = undefined
set_positions = undefined
 
set_positions = undefined

set_positions = ->
  $('.li').each (i) ->
    $(this).attr 'data-pos', i + 1
    return
  return
 
 console.log 'Mehak1'
ready = ->
  set_positions()
  $('.sortable').sortable()
  $('.sortable').sortable().bind 'sortupdate', (e, ui) ->
    updated_order = []
    set_positions()
    $('.li').each (i) ->
      updated_order.push
        id: $(this).data('id')
        position: i + 1
      return
    $.ajax
      type: 'PUT'
      url: '/portfolios/sort'
      data: order: updated_order
      console.log 'Mehak4'
    return
  return

  $(document).ready ready
 console.log 'Mehak3'
