import { Link } from "react-router-dom"
export default function CustomButton(){
return (

      <Link
      to={'/home'}
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