import Filter from "./Filter"

export default shape_designer.filter.OpacityFilter = class OpacityFilter extends Filter {

  constructor() {
    super()
    this.NAME = "shape_designer.filter.OpacityFilter"
  }

  insertPane(figure, $parent) {

    $parent.append('<div id="opacity_container" class="panel panel-default">' +
      ' <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#opacity_panel">' +
      '    Opacity' +
      '    <span id="button_remove_OpacityFilter" class="btn btn-mini glyphicon icon ion-ios-close-outline pull-right" ></span>' +
      '</div>' +
      ' <div class="panel-body collapse in" id="opacity_panel">' +
      '   <div class="form-group">' +
      '      <div class="input-group" ></div> ' + // required to ensure the correct width of the siblings
      '      <div class="input-group">' +
      '         <input class="form-control" id="filter_opacity" type="text" value="' + parseInt(figure.getAlpha() * 100) + '" />' +
      '      </div>' +
      '   </div>' +
      ' </div>' +
      '</div>')

    $("#filter_opacity").TouchSpin({
      min: 0,
      max: 100,
      step: 5,
      boostat: parseInt(figure.getAlpha() * 100),
      maxboostedstep: 10,
      postfix: '%'
    })
    $("#filter_opacity").on("change", $.proxy(function () {
      this.setAlpha(parseInt($("#filter_opacity").val()) / 100.0)
    }, figure))

    $("#button_remove_OpacityFilter").on("click", () => {
      figure.removeFilter(this)
      figure.setAlpha(1)
      $("#opacity_container").animate({"height": "0", "opacity": 0, "margin-bottom": 0}, 500, () => {
        $('#opacity_container').remove()
      })
    })
  }

  removePane() {
  }
}




