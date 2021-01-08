
//Utility functions

const first = ([f]) => f

const take = (iter, n) => {
    let res = [], i = 0
    for (const x of iter) {
        if (i < n) res.push(x)
        else break
        i++
    }
    return res

}

function* iterateObject(obj) {
    for (key in obj)
        yield obj[key]
}

//SPA setup
const pageChange = num => {
    const match = first(Array.from(document.querySelectorAll('.sticky > a').values()).filter(node => node.innerText.includes(num)))
    document.querySelector('.current-page').classList.remove('current-page')
    match.classList.add('current-page')

    const pageMap = [
        'one',
        'two',
        'three',
        'four'
    ]
    const changeIframe = src => document.querySelector('iframe').setAttribute('src', src + '.html')

    changeIframe(pageMap[num - 1])
}

//one
const buttonClick = num => {
    const text = document.querySelector('#text'),
          cond = num === 1

    text.innerText = cond 
                    ? "I'm Right"
                    : "No, I'm Right!" 

    text.classList.remove(cond ? 'right' : 'left')
    text.classList.add(cond ? 'left' : 'right')
}

//two
const mouseOver = () => {
    window.alert("Hey, I told you not to hover over me!")
}


//three
document.getElementById('userForm')?.addEventListener( 'submit' , e => {
    e.preventDefault()

    const text = document.getElementById('msg')
    const [ username, email, password ] = take(iterateObject(e.target), 3).map(({ value }) => value)

    if (password === '12345678') text.innerText = `${username} verified: Secret Message`
    else {
        text.innerText = ''
        window.alert('Wrong Password!')
    }
    
})

//four
document.getElementById('sphere')?.addEventListener( 'submit' , e => {
    e.preventDefault()
    
    const text = document.getElementById('msg')
    const [ radius ] = take(iterateObject(e.target), 1).map(({ value }) => value)

    console.log(text)
    const volume = (4/3) * Math.PI * Math.pow(radius, 3)

    text.innerText = `A Sphere with a radius of ${radius} has a volume of ${volume}`
    
})