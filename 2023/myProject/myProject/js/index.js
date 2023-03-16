let comment = document.querySelector(".comment__comment")
let name = document.querySelector('.comment__nameInput')
let addDates = document.querySelector('.comment__dataInput')
let text = document.querySelector('.comment__textarea')
let button = document.querySelector(".comment__button")
let commentNoneName = document.querySelector(".comment__noneName")
let commentNoneText = document.querySelector(".comment__noneText")
let commentHr = document.querySelector(".comment__hr")

text.addEventListener("keydown", (event) => {
    if(event.key === "Enter" && !event.shiftKey) {
        event.preventDefault()
        func()
    }
})

button.addEventListener('click', func)
    
function func() {
    if(name.value == '' || text.value.trim() == '') {
        if(name.value == '') {
            commentNoneName.style.display = 'block'
            name.addEventListener('input', () => {
                commentNoneName.style.display = 'none'
            })
        }
        
        if(text.value.trim() == '') {
            commentNoneText.style.display = 'block'
            text.addEventListener('input', () => {
                commentNoneText.style.display = 'none'
            })
        }
    } else {
        //Общий блок div
        let div = document.createElement('div')
        div.className = 'blockDiv'
        comment.appendChild(div)

        //Блок div для кнопоки closse и абзаца elemName
        let blockButton = document.createElement('div')
        blockButton.className = 'blockButton'
        div.appendChild(blockButton)

        //Абзац для имени
        let elemName = document.createElement('p')
        elemName.className = 'users'
        elemName.textContent = name.value
        blockButton.appendChild(elemName)

        //Кнопка удалить
        let closse = document.createElement('button')
        closse.className = 'closseStyle'
        closse.innerHTML = '<img src="img/closse.png" class="imgClosse"/>'
        blockButton.appendChild(closse)
     
        closse.addEventListener('click', () => {
            div.remove()
        })

        //Абзац для текста
        let elemText = document.createElement('p')
        elemText.className = 'textes'
        elemText.textContent = text.value
        div.appendChild(elemText)

        //Абзац для даты
        let elemDates = document.createElement('p')
        elemDates.className = 'textesData'

        let date = new Date()
        let fullYear = date.getFullYear()
        let month = date.getMonth()
        let day = date.getDate()

        let hours = date.getHours()
        if (hours < 10) hours = '0' + hours
      
        let minutes = date.getMinutes()
        if (minutes < 10) minutes = '0' + minutes

        let dates = new Date(addDates.value)
        let fullYears = dates.getFullYear()
        let months = dates.getMonth()
        let days = dates.getDate()

        if(addDates.value == '' || fullYear == fullYears && month == months && day == days) {
            elemDates.textContent = 'Сегодня: ' + hours + ':' + minutes
        } else if (fullYear == fullYears && month == months && day - 1 == days) {
            elemDates.textContent = 'Вчера: ' + hours + ':' + minutes
        } else if (fullYear < fullYears || month < months || day < days) {
            alert('Не верная дата! Установленна текущая дата!')
            elemDates.textContent = 'Сегодня: ' + hours + ':' + minutes
        } else {
            elemDates.textContent = addDates.value + ' ' + hours + ':' + minutes
        }

        div.appendChild(elemDates)

        //Кнопка Лайк/Дизлайк
        let likes = document.createElement('button')
        likes.className = 'likesStyle'
        let like ="Лайк: " + '<img src="img/Like.jpg">'
        let dislike = "Лайк: " + '<img src="img/Likes.jpg">'
        likes.innerHTML = like
        div.appendChild(likes)

        likes.addEventListener('click', () => {
            if(likes.innerHTML == like) {
                likes.innerHTML = dislike  
            } else if (likes.innerHTML == dislike) {
                likes.innerHTML = like
            }
        })

        //Линия
        let border = document.createElement('hr')
        border.className = 'lineBorder'
        div.appendChild(border)

        //Обнуление полей
        name.value = ''
        addDates.value = ''
        text.value = ''
    }
}