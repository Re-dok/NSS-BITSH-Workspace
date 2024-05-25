import { Link,useNavigate } from "react-router-dom"
export default function CustomButton(props){

      const navigate = useNavigate();

      const handleClick = (e) => {
            e.preventDefault();
          
            const { contentButtonLink } = props;
          
            if (contentButtonLink) {
              const [path, hash] = contentButtonLink.split("#");
              console.log("here");
              // Navigate to the page specified in the link
              navigate(path);
              console.log("here2");
          
              // Scroll to the element with the ID specified in the hash
              if (hash) {
                
              console.log("here3 "+hash);
                setTimeout(() => {
                  const element = document.getElementById(hash);
              console.log("here4");
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth',block: 'center', // Scroll to the center of the element
                    inline: 'nearest', });
                        console.log("here5");
                  }
              console.log("here6");
                }, 1000); // Adjust the delay as needed based on your page loading time
              console.log("here7");
              }
              console.log("here8");
            }
          };
          

return (

      <Link
      to={props.contentButtonLink}
      onClick={handleClick}
      style={{
            display: 'inline-flex',
            textDecoration: 'none',
            padding: '10px 20px',
            marginTop: '10px',
            width: '77px',
            fontSize: '0.9rem',
            height: '24px',
            backgroundColor: '#e66137',
            color: 'white',
            borderRadius: '4px',
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
            cursor: 'pointer',
      }}
>
Read More
</Link>
)
}