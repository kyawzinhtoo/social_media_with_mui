import { Box } from "@mui/material";
import Post from "./Post";

const lst = [
    {name:"Robert Frost",avatar:"R",date:'November 7,2023',url:'https://images.pexels.com/photos/1443657/pexels-photo-1443657.jpeg?auto=compress&cs=tinysrgb&w=600',letter:"Nothing Gold can stay.Nature's first green is gold,Her hardest hue to hold.Her early leaf's a flower.But only so an hour.Then leaf subsides to leaf.So Eden sank to grief,So dawn goes down to day.Nothing gold can stay."},
    {name:"John Lennon",avatar:"J",date:'June 19,2024',url:'https://images.pexels.com/photos/5078189/pexels-photo-5078189.jpeg?auto=compress&cs=tinysrgb&w=600',letter:"When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps."},
    {name:"Gary Snyder",avatar:"G",date:'April 11,2024',url:'https://images.pexels.com/photos/4353632/pexels-photo-4353632.jpeg?auto=compress&cs=tinysrgb&w=600',letter:"I thank you God for this most amazing day, for the leaping greenly spirits of trees, and for the blue dream of sky and for everything which is natural, which is infinite, which is yes."},
    {name:"Mimi Novic",avatar:"M",date:'September 20,2024',url:'https://images.pexels.com/photos/5411457/pexels-photo-5411457.jpeg?auto=compress&cs=tinysrgb&w=600',letter:"Now is the time to stop and enjoy the view! This time of year, nature's beauty is on full display. It can be hard to capture your love for the outdoors in a short message, but these nature quotes can help! Share these words with your friends on social media, or jot them down in your journal for future reflection."},
    {name:"Ciara",avatar:"C",date:'March 29,2022',url:'https://images.pexels.com/photos/7525655/pexels-photo-7525655.jpeg?auto=compress&cs=tinysrgb&w=600',letter:"“To buy or not to buy travel insurance“, that is the question! Because honestly, who wants to dish out extra money on top of buying an expensive trip."},
    {name:"Anamika Mishra",avatar:"A",date:'July 10,2023',url:'https://images.pexels.com/photos/6135443/pexels-photo-6135443.jpeg?auto=compress&cs=tinysrgb&w=600',letter:"This past year, I wasn’t able to spend as much time in nature as I’d like because I was injured. I ruptured my Achilles and spent many months recovering indoors. While I wished to be outside often , it wasn’t always feasible. These captions on nature were a great way to recenter myself and ground myself in a natural environment (and gratitude mindset)."},
    {name:"Munia Khan,",avatar:"K",date:'February 25,2023',url:'https://quotequeendom.com/wp-content/uploads/2024/03/QQ-Wild-and-Free-Like-a-Waterfall.jpg',letter:"Waterfalls have a unique way of inspiring us, don’t they? They stand as natural symbols of beauty, strength, and persistence, reminding us of the relentless force of nature and the beauty in the journey. Let these inspirational quotes about waterfalls wash over you, offering a fresh perspective and a renewed sense of wonder."}
];

export default function Feed(){

    return (
        <Box sx={{flex:4,p:4}}>
            {lst.map((a) => (<Post {...a} key={a.name}/>))}
        </Box>
    )
}