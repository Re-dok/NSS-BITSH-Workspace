import { Link,useNavigate } from "react-router-dom"
export default function CustomButton(props){

      const navigate = useNavigate();

      const handleClick = (e) => {
            e.preventDefault();
          
            const { contentButtonLink } = props;
          
            if (contentButtonLink) {
              const [path, hash] = contentButtonLink.split("#");
              // Navigate to the page specified in the link
              navigate(path);
          
              // Scroll to the element with the ID specified in the hash
              if (hash) {
                
                setTimeout(() => {
                  const element = document.getElementById(hash);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth',
                                             block: 'center', // Scroll to the center of the element
                                             inline: 'nearest'
                                          });
                  }
                }, 800); // Adjust the delay as needed based on your page loading time
              }
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
            textAlign:'center',
            textJustify:'inter-word'
      }}
>
{props.buttonText}
</Link>
)
}