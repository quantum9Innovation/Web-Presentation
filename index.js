class setup {
    constructor (trans, slides, slide, op, part) {
        var op = op
        var part = part
        var trans = trans
        var slides = slides
        var slide = slide
    }
}
var background = function(co)
{

    if ( co.length < 4 )
    {

        document.body.style.backgroundColor = "rgb("+co[0]+","+co[1]+","+co[2]+")"
        c.fillStyle = "rgb("+co[0]+","+co[1]+","+co[2]+")"

    }
    else {
        document.body.style.backgroundColor = "rgb("+co[0]+","+co[1]+","+co[2]+")"
        c.fillStyle = "rgba("+co[0]+","+co[1]+","+co[2]+","+co[3]+")"
    }
    c.fillRect(0, 0, w, h)

}
var textbox = function(x, y, w, s, fs, a, f, co, d, t)
{

    c.font = f
    c.fillStyle = "rgb("+co[0]+","+co[1]+","+co[2]+")"
    c.textAlign = a[0]
    c.textBaseline = a[1]

    var cut = 1
    while ( cut )
    {

        t = t.split(d)
        p = 0

        for ( var i = 0; i < t.length; i++ )
        {

            if ( c.measureText(t.slice(0, i+1).join(d)).width > w )
            {

                p = i
                i = t.length

            }
            if ( i == t.length-1 )
            {

                p = t.length-1

            }

        }

        c.fillText(t.slice(0, p+1).join(d), x, y+(cut-1)*s*fs)
        t = t.slice(p+1, t.length).join(d)

        cut++

        if ( t == "" )
        {

            cut = false

        }

    }

}
var fade = function(co)
{

    if (part) {
        op+=0.01
    }
    else {
        op-=0.01
    }
    if ( op >= 1 ){

        slide++
        part = 1-part

    }
    if ( op <= 0 && part == 0 ){

        part = 1
        trans = false

    }
    co.push(op)
    background(co)
}
var zero = function() {

    if ( trans )
    {fade([255, 255, 255])
 


    }
}
var refresh = function()
{

    if ( slide == 0 ){
        zero()
    }
    window.requestAnimationFrame(refresh)

}
var go = function(e)
{

    if ( e.key == "ArrowRight" || e.key == "ArrowDown" )
    {

        if ( slide < slides-1 )
        {

            trans = true

        }

    }
    if ( e.key == "ArrowLeft" || e.key == "ArrowUp" )
    {

        if ( slide > 0 )
        {

            slide--

        }

    }

}
var startup = function() {
    document.addEventListener("keyup", go)
    refresh()
}
