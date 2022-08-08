import { useState, useEffect } from "react"
import axios from "axios"
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import CustomerCard from "../components/CustomerCard"
import { red } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(2),
  },
}))



const Customers = () => {
  const classes = useStyles()
  const [customers, setCustomers] = useState([])



  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        const { data } = response.data

        setCustomers(data)
      })
  }, [])

  return (
    <>
      <Grid container>
        {
          customers.map(customer => (
            <Grid item xs={12} md={4} >
              <CustomerCard
                avatar={customer.avatar}
                name={customer.first_name}
                lastname={customer.last_name}
                email={customer.email} 
                className={classes.card}
                />
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}


export default Customers