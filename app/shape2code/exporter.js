var json=[
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "e72b4754-e04e-21df-6937-669d31471b19",
    "x": 7965,
    "y": 7965.3276000000005,
    "width": 70,
    "height": 70,
    "alpha": 1,
    "selectable": true,
    "draggable": true,
    "angle": 0,
    "userData": {
      "baseClass": "draw2d.SetFigure",
      "code": "/**\n * by 'Draw2D Shape Designer'\n *\n * Custom JS code to tweak the standard behaviour of the generated\n * shape. add your custome code and event handler here.\n *\n *\n */\ntestShape = testShape.extend({\n\n    init: function(attr, setter, getter){\n         this._super(attr, setter, getter);\n\n        this.attr({resizeable:false});\n        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());\n    },\n\n    /**\n     *  Called by the simulator for every calculation\n     *  loop\n     *  @required\n     **/\n    calculate:function()\n    {\n        var a = this.getInputPort(\"input_a\").getValue();\n        var b = this.getInputPort(\"input_b\").getValue();\n        var c = this.getInputPort(\"input_c\").getValue();\n        \n        // s = a XOR b XOR  c\n        this.getOutputPort(\"output_s\").setValue(a ^ b ^ c);\n        \n        // c = (at least two bits are set)\n        this.getOutputPort(\"output_c\").setValue((a+b+c)>1);\n    },\n\n\n    /**\n     *  Called if the simulation mode is starting\n     *  @required\n     **/\n    onStart:function()\n    {\n    },\n\n    /**\n     *  Called if the simulation mode is stopping\n     *  @required\n     **/\n    onStop:function()\n    {\n    }\n});",
      "name": "Rectangle",
      "markdown": "## Full Adder\n\nFull adder is developed to overcome the drawback of \nHalf Adder circuit. It can add two one-bit numbers \nA and B, and carry c. The full adder is a three \ninput and two output combinational circuit.\n\n\n\n|  A    |    B    |  Cin     |    S    |    C   |\n|:-----:|:-------:|:--------:|:--------:|:-------|\n|   0   |    0    |     0    |     0    |     0  |\n|   0   |    0    |     1    |     1    |     0  |\n|   0   |    1    |     0    |     1    |     0  |\n|   0   |    1    |     1    |     0    |     1  |\n|   1   |    0    |     0    |     0    |     1  |\n|   1   |    0    |     1    |     0    |     1  |\n|   1   |    1    |     0    |     0    |     1  |\n|   1   |    1    |     1    |     0    |     1  |\n"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "rgba(255,255,255,1)",
    "color": "rgba(48,48,48,1)",
    "stroke": 1,
    "radius": 1,
    "dasharray": null,
    "vertices": [
      {
        "x": 7965,
        "y": 7965.3276000000005
      },
      {
        "x": 8035,
        "y": 7965.3276000000005
      },
      {
        "x": 8035,
        "y": 8035.3276000000005
      },
      {
        "x": 7965,
        "y": 8035.3276000000005
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "aa347e18-3b28-dada-f134-ecac6c2ffa84",
    "x": 7985.65625,
    "y": 7983.3125,
    "width": 28.328125,
    "height": 21,
    "alpha": 1,
    "selectable": true,
    "draggable": true,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "rgba(0,0,0,0)",
    "color": "rgba(27,27,27,1)",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "Full",
    "outlineStroke": 0,
    "outlineColor": "rgba(0,0,0,0)",
    "fontSize": 10,
    "fontColor": "rgba(8,8,8,1)",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "5d534841-5021-4cdb-260b-9229aaa38720",
    "x": 7982.717000000001,
    "y": 7996.5617999999995,
    "width": 35.85000038146973,
    "height": 21,
    "alpha": 1,
    "selectable": true,
    "draggable": true,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "rgba(0,0,0,0)",
    "color": "rgba(27,27,27,1)",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "Adder",
    "outlineStroke": 0,
    "outlineColor": "rgba(0,0,0,0)",
    "fontSize": 10,
    "fontColor": "rgba(8,8,8,1)",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "e7565a76-9e96-5cb7-3a96-f888e06f053c",
    "x": 7966,
    "y": 7961.1875,
    "width": 28.328125,
    "height": 20.734375,
    "alpha": 1,
    "selectable": true,
    "draggable": true,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "rgba(0,0,0,0)",
    "color": "rgba(27,27,27,1)",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "A",
    "outlineStroke": 0,
    "outlineColor": "rgba(0,0,0,0)",
    "fontSize": 16,
    "fontColor": "rgba(8,8,8,1)",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "511fb62f-8edb-1b20-4894-3a53b4d1949b",
    "x": 7967,
    "y": 7989.3125,
    "width": 28.328125,
    "height": 20.734375,
    "alpha": 1,
    "selectable": true,
    "draggable": true,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "rgba(0,0,0,0)",
    "color": "rgba(27,27,27,1)",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "B",
    "outlineStroke": 0,
    "outlineColor": "rgba(0,0,0,0)",
    "fontSize": 16,
    "fontColor": "rgba(8,8,8,1)",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "8a2d55b6-32a0-fdfd-68b7-d3df1035e143",
    "x": 8013.34375,
    "y": 7967.1875,
    "width": 28.328125,
    "height": 20.734375,
    "alpha": 1,
    "selectable": true,
    "draggable": true,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "rgba(0,0,0,0)",
    "color": "rgba(27,27,27,1)",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "S",
    "outlineStroke": 0,
    "outlineColor": "rgba(0,0,0,0)",
    "fontSize": 16,
    "fontColor": "rgba(8,8,8,1)",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "a2956abc-b259-7b38-17f9-1bcb2abee403",
    "x": 8013.34375,
    "y": 8008.3125,
    "width": 28.328125,
    "height": 20.734375,
    "alpha": 1,
    "selectable": true,
    "draggable": true,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "rgba(0,0,0,0)",
    "color": "rgba(27,27,27,1)",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "C",
    "outlineStroke": 0,
    "outlineColor": "rgba(0,0,0,0)",
    "fontSize": 16,
    "fontColor": "rgba(8,8,8,1)",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "3e46095d-560c-8139-3ea0-f44e93718983",
    "x": 8030.8256,
    "y": 7974.25,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "selectable": true,
    "draggable": true,
    "angle": 0,
    "userData": {
      "name": "output_s",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "rgba(55,177,222,1)",
    "color": "rgba(27,27,27,1)",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "71ba1c80-5739-1862-2a6e-fbcca41e28cb",
    "x": 8031.8256,
    "y": 8016.5617999999995,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "selectable": true,
    "draggable": true,
    "angle": 0,
    "userData": {
      "name": "output_c",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "rgba(55,177,222,1)",
    "color": "rgba(27,27,27,1)",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "a4825e75-c25c-5cca-36d3-7aad8c012d1a",
    "x": 7959.0768,
    "y": 7969.25,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "selectable": true,
    "draggable": true,
    "angle": 0,
    "userData": {
      "name": "input_a",
      "type": "Input",
      "direction": 3,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "rgba(55,177,222,1)",
    "color": "rgba(27,27,27,1)",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "eed37de1-e11c-3573-2e0c-74b7ce7b718e",
    "x": 7959.0768,
    "y": 7996.25755,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "selectable": true,
    "draggable": true,
    "angle": 0,
    "userData": {
      "name": "input_b",
      "type": "Input",
      "direction": 3,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "rgba(55,177,222,1)",
    "color": "rgba(27,27,27,1)",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "075d8dac-2bf8-35d5-c3b1-5c6f9f8116ec",
    "x": 7959.0768,
    "y": 8019.5617999999995,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "selectable": true,
    "draggable": true,
    "angle": 0,
    "userData": {
      "name": "input_c",
      "type": "Input",
      "direction": 3,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "rgba(55,177,222,1)",
    "color": "rgba(27,27,27,1)",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "508db277-22e0-1fbf-9d91-9daa2b47801d",
    "x": 7967,
    "y": 8011.5617999999995,
    "width": 28.328125,
    "height": 20.734375,
    "alpha": 1,
    "selectable": true,
    "draggable": true,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "rgba(0,0,0,0)",
    "color": "rgba(27,27,27,1)",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "C",
    "outlineStroke": 0,
    "outlineColor": "rgba(0,0,0,0)",
    "fontSize": 16,
    "fontColor": "rgba(8,8,8,1)",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "9f9bb68a-3e0e-a2d3-aa6e-b2008f5393c5",
    "x": 7977.717000000001,
    "y": 8017.3125,
    "width": 28.328125,
    "height": 20.953125,
    "alpha": 1,
    "selectable": true,
    "draggable": true,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "rgba(0,0,0,0)",
    "color": "rgba(27,27,27,1)",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "in",
    "outlineStroke": 0,
    "outlineColor": "rgba(0,0,0,0)",
    "fontSize": 12,
    "fontColor": "rgba(8,8,8,1)",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  }
];
var pkg='draw2d_circuit_alu_FullAdder';
app.fileNew();

var reader = new draw2d.io.json.Reader();
reader.unmarshal(app.view,json);

var code = null;
var img  = null;
var customCode=app.getConfiguration("code");
var markdown = app.getConfiguration("markdown");
markdown = markdown?markdown:"";
var writer = new shape_designer.FigureWriter();
try {
    writer.marshal(app.view, pkg, function (js) {
        code = js;
        try {
            eval(js);
        }
        catch (exc) {
            console.log("Error in shape code. \nRemove error and try it again:\n\n>>    " + exc);
            throw exc;
        }
        var splash = $(
            '<div class="overlay-scale">' +
            '<div id="test_canvas">' +
            '</div>' +
            '<div>');

        // fadeTo MUSS leider sein. Man kann mit raphael keine paper.text elemente einfügen
        // wenn das canvas nicht sichtbar ist. In diesen Fall mach ich das Canvas "leicht" sichtbar und raphael ist
        // zufrieden.
        $("body").append(splash);
        var canvas = new draw2d.Canvas("test_canvas");
        var test = eval("new "+pkg+"()");
        canvas.add(test, 400, 160);
        canvas.commonPorts.each(function (i, p) {
            p.setVisible(false);
        });

        canvas.getBoundingBox = function () {
            var xCoords = [];
            var yCoords = [];
            this.getFigures().each(function (i, f) {
                var b = f.getBoundingBox();
                xCoords.push(b.x, b.x + b.w);
                yCoords.push(b.y, b.y + b.h);
            });
            var minX = Math.min.apply(Math, xCoords);
            var minY = Math.min.apply(Math, yCoords);
            var width = Math.max(10, Math.max.apply(Math, xCoords) - minX);
            var height = Math.max(10, Math.max.apply(Math, yCoords) - minY);

            return new draw2d.geo.Rectangle(minX, minY, width, height);
        };

        new draw2d.io.png.Writer().marshal(canvas, function (imageDataUrl, base64) {
            img = base64;
            splash.remove();
        }, canvas.getBoundingBox().scale(10, 10));
    });
}
catch(e){
    console.log(e);
    code="";
    img="";
}


