// propertyTaker() adinda funksiya yaradin. Argument kimi obyekt (obj) ve string (proprtyName) alsin. Hemin obyektin verdiyim propertyni ekrana cixarsin. Mes:


const propertyTaker = (obj,str) => {
    console.log(obj[str]);
}

propertyTaker({ continent: 'Asia', country: 'Japan'}, 'continent')