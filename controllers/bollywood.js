const BollywoodPost = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZgKbAbCbgWL5Zd81mYHbQQcgQIdtQvpHx4g&usqp=CAU",
            title:"Mithun Chakraborty doesn't want a biopic",
            details: "Explaining his reason, the actor said that he has been through a lot in life and doesn't want anyone else to face the same. ",
            date:"Nov 12, 2022",
            type:"Bollywood"
          },
          {
            id:2,
            img:"https://static.toiimg.com/thumb/msid-95473777,width-800,height-600,resizemode-75,imgsize-8914,pt-32,y_pad-40/95473777.jpg",
            title:"SRK receives Global Icon of Cinema award",
            details: "Bollywood megastar Shah Rukh Khan attended the Sharjah International Book Fair 2022 where he was honored with the Global Icon of Cinema and Cultural Narrative award.",
            date:"Nov 12, 2022",
            type:"Bollywood"
            
          },
          {
              id:3,
              img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_5OzWAtKrlNTq-fMMNf0PDK_iHjz6jg8Tg&usqp=CAU",
              title:"Priyanka Chopra on working in Hollywood",
              details:"Actor, producer, and entrepreneur Priyanka Chopra enjoys a massive fan following not only in Bollywood but also in Hollywood. ",
              date:"Nov 12, 2022",
              type:"Bollywood"
          },
          {
              id:4,
              img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtG9otwLKCsqLKzJIsQaWAAp9SxvlEl6AtA&usqp=CAU",
              title:"Akshay Kumar on having Canadian citizenship",
              details: "Earlier Akshay revealed that he got his Canadian citizenship at a time when his films flopped and he was thinking about moving to Canada.",
              date:"Nov 12, 2022",
              type:"Bollywood",
              num:1
          }    
    ])
}

module.exports.getBollywoodPost = BollywoodPost;