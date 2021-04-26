export const orbitBodyTranslate = (bodyName) => {
    switch (bodyName){
        case "Earth":
           return bodyName="Земли"
        case "Moon":
            return bodyName="Луны"
        case "Sun":
            return bodyName="Солнца"
        case "Mars":
            return bodyName="Марса"
        case "Merc":
            return bodyName="Меркурия"
        case "Venus":
            return bodyName="Венеры"
        case "Jupiter":
            return bodyName="Юпитера"
        case "Saturn":
            return bodyName="Сатурна"
        case "Uranus":
            return bodyName="Урана"
        case "Neptune":
            return bodyName="Нептуна"
        default:
            return bodyName="Другого тела не предусмотренного этой глупой программой"
    }
}