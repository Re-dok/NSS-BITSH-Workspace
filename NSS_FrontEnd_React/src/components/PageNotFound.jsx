export default function PageNotFound(){
      return(
           
            <div style={{maxHeight:'180px',
                        maxWidth:'400px',
                        color:'black',
                        paddingLeft:'15%',
                        paddingTop:'15%',
                        display:'flex',
                        flexDirection:'column'
}}>   
                  <a href="../home" style={{color:'black',textDecorationLine:'none'}}>
                  <img
                                    src="../src/assets/Images/NSS-symbol.png"
                                    alt="NSS logo"
                                    loading="lazy"
                                    style={{
                                          width:'50px',
                                    }}
                              />
                  <br></br>
                  NSS Hyderabad
                  </a>
                  404. That’s an error.<br></br>
                  The requested URL was not found on this server.
            </div>
      )
}