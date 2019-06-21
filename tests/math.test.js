const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add} = require('../src/math')

test('should calculate total with tip', ()=>{
    const total = calculateTip(10, .3)
    expect (total).toBe(13)
})

test('should ude default tip value', ()=>{
    const total = calculateTip(10)
    expect (total).toBe(12.5)
})

test('test celcius', ()=>{
    const temp = fahrenheitToCelsius(32)
    expect (temp).toBe(0)
})

test('farenhite test', ()=>{
    const temp = celsiusToFahrenheit(0)
    expect (temp).toBe(32)
})

// test('Async test demo', (doE)=>{
//     setTimeout(()=>{
//         expect(1).toBe(2)
//         doE()
//     },2000)
// })

test('Should add two num', (done)=>{
    add(2,3).then((sum)=>{
        expect(sum).toBe(5)
        done()
    })
})

test('should add two number async/await', async ()=>{
    const sum = await add(10,22)
    expect(sum).toBe(32)
})