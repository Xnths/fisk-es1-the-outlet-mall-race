function Cards(question) {
    this.question = question;
    this.points = points;
}

Cards.prototype = {
    create: function (context) {
        context.classList.remove('invisible')
    }
}