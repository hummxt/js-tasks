// Spread ve Rest arasindaki ferq

// Spread numune

const insan = {
    yas: 70,
    gender: 'kisi',
    ad: 'Hummet'
}

const insan2 = {...insan}

// Spread odur ki, mueyyen obyektin propertylerini diger obyekte menimsetmekdir.


// Rest odur ki,obyektin icindeki mueyyen arqumentlerin sayini oyrenmek ucundur.

function melumatlar(...arqumentler) {
    console.log(arqumentler)
}

console.log(3,53,2432,432,423,432,4,234,234,234,32)