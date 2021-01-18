const getDate = (bday) => {
    const now = new Date()

    const bYear = Number(bday.slice(0, 4))
    const bMonth = Number(bday.slice(5, 7))
    const bDay = Number(bday.slice(9, 10))

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const dob = new Date(bYear, bMonth, bDay)
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate())
    let age = today.getFullYear() - dob.getFullYear()
    if (today < dobnow) {
        age = age-1
    }
    return age
}

export default getDate