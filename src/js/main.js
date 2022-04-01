const $ = document.querySelector.bind(document)

/**
 * Takes the values ​​of the fields, finds the total values, converts it to a mask and displays the result on the screen
 * @param {event} e Event of click in form button
 * @return the total amount on screen in HTML
 */
const calculateResult = (e) => {
    e.preventDefault()

    const widthValue = convertStringToFloat('width-floor')

    const heigthValue = convertStringToFloat('heigth-floor')

    const priceFloor = getFloorPriceFloat()

    const areaValue = calculateArea(widthValue, heigthValue)

    const floorValue = calculateFloorValue(areaValue, priceFloor)

    const areaValueMask = new Intl.NumberFormat('de-DE').format(areaValue)

    const floorValueMask =  new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(floorValue)

    $('#total-area').innerText = `Área total: ${areaValueMask} m²`

    $('#results').innerText = `Valor do revestimento: ${floorValueMask}`
}

/**
 * Gets the value of a HTML input and converts it to a float number
 * @param {string} id A id from a HTML input without the hash
 * @returns The value of the input converted to a float number
 */
const convertStringToFloat = (id) => {
    let aux = $(`#${id}`).value

    const value = parseFloat(aux)

    return value
}

/**
 * Get the attribute value of class active
 * @returns The value of attribute value, in number
 */
const getFloorPriceFloat = () => {
    let aux = $('.active').getAttribute('value')

    const value = parseFloat(aux)

    return value
}

/**
 * get the value of elements in input for multiply all, fiding the area
 * @param {number} widthValue A value of width
 * @param {number} heigthValue A value of height
 * @returns The value of multiplying the elements, in area  
 */
const calculateArea =(widthValue, heigthValue) => {
    const finalArea = widthValue * heigthValue
    
    return finalArea
}

/**
 * get the value of elements in input and select for multiply all, fiding the cost
 * @param {number} area Value of area
 * @param {number} priceFloor A value of price per meter
 * @returns The value of multiplying the elements, in cash 
 */
const calculateFloorValue = (area, priceFloor) => {
    const finalValue = area * priceFloor
    
    return finalValue
}

/**
 * 
 * @param {Event} e click event, merges between the divs, 
 * adding the active class to the selected one and removing 
 * it from the previous one
 */
const typeClickEvent = (e) =>  {

    $('.floor.active').classList.remove('active')
    e.currentTarget.classList.add('active')   
}


// Events

/**
 * click event, to toggle active class between divs
 */
document.querySelectorAll('.floor').forEach(item => {
    item.addEventListener('click', typeClickEvent)})
