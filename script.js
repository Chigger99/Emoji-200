//const myEmojis = ["🚲	", "🥋", "♟"]

for (i =0; i < myEmojis.length; i++){
	console.log(myEmojis[i])

const myEmojis = ["🤪","🥥","🐒"]
let emojiBank = document.getElementById("emoji-element")
//console.log(emojiBank)

function displayEmojis(){
for (i =0; i < myEmojis.length; i++){
	//console.log(myEmojis[i])
	const emoji = document.createElement('span')
	emoji.textContent =myEmojis[i]
	emojiBank.append(emoji)
 }
}

displayEmojis()


const pushButton = document.getElementById("push-button")
pushButton.addEventListener("click", function(){
	const emojiInput = document.getElementById("emoji-input")
	
	if (emojiInput.value){	
	
	//console.log(emojiInput.value)
	myEmojis.push(emojiInput.value)
	emojiInput.value = ""
	//console.log(myEmojis)
}
	
})


// for (item in myEmojis) {
// 		console.log(item)
	
