let result = document.getElementById("result");

//array of quotes
let quote = [
    '"Remain calm in every situation because peace equals power.” -Joyce',
    '“We almost always see only what’s wrong with other people and not what’s wrong with us.” -Joyce Meye',
    '“The rain WILL stop, the night WILL end, the hurt WILL fade. Hope is never so lost that it can’t be found.” -Mandy Hale',
    '"No matter how much you love someone, you can’t force them to change. They have to want it for themselves.” -Mandy Hale ',
    '"When you let go, something magical happens. You give God room to work." -Mandy Hale',
    '“Embrace the struggle and let it make you stronger. It won’t last forever.” -Tony Gaskins',
    '“You’re worthy of it all. You just have to believe you are!” -Tony Gaskins',
    '“Failure is the condiment that gives success its flavor.” -Truman Capote',
    '“The most undeveloped property in the world lies between two ears.” -Susan Gale',
    '“One day you will realise that for your life to change for the better, you must first change for the better.” -Leon Brown',
    '“In three words I can sum up everything I’ve learned about life: It goes on.” ― Robert Frost',
    '"By being yourself, you put something beautiful into the world that was not there before." -Edwin Elliot',
    '“It’s not how long you live, but how you live, that matters most.” -Jill Whitman',
    ' “The best portion of a good man’s life is his little nameless, unencumbered acts of kindness and of love.” — Wordsworth',
    '“Good friends, good books, and a sleepy conscience: this is the ideal life.” — Mark Twain',
    ' “The two most important days in your life are the day you are born and the day you find out why.” – Mark Twain',
    '“Life is like a coin. You can spend it any way you wish, but you only spend it once.” — Lillian Dickson',
    '“I don’t know what’s going to happen to me tomorrow. That’s why I don’t save my best for last.” -Paulo Coelho',
    '“Do not rush, for God’s secret is patience. Everything that is meant to be, will come at the designated time.” -Leon Brown',
    '"When you’ve seen beyond yourself, then you may find, peace of mind is waiting there." -George Harrison',
    '“Life is like riding a bicycle. To keep your balance, you must keep moving.” — Albert Einstein',
    '“When we do the best we can, we never know what miracle is wrought in our life or the life of another.” — Helen Keller',
   '“Curiosity about life in all of its aspects, I think, is still the secret of great creative people.” – Leo Burnettn',
   '“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”– Henry Ford',
   '“Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.” — Buddha',
   '“Money and success don’t change people; they merely amplify what is already there.” — Will Smith',
   ' “You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.” — Dr. Seuss',
   '"True happiness arises, in the first place, from the enjoyment of one’s self." -Joseph Addison',
    '“It is better to be lonely than allow people who are not going anywhere keep you from your destiny.” -Joel Osteen',
];

//changes every 30seconds
setInterval( function random(){
        var randomQuotes = quote[Math.floor(Math.random() * quote.length)]
        result.innerHTML = randomQuotes;
 }, 30000);

