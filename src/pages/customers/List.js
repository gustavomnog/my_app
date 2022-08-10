import { useState, useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import CustomerCard from "../../components/CustomerCard"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(2),
  },
}))



const List = () => {
  const classes = useStyles()
  const [customers, setCustomers] = useState([])

  const history = useHistory()

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        const { data } = response.data

        setCustomers(data)
      })
  }, [])

  const handleRemoveCustomer = id => {
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        const newCustomersState = customers.filter(customer => customer.id !== id)

        setCustomers(newCustomersState)
      })
  }

  const handleEditCustomer = id => {
    history.push(`customers/edit/${id}`)
  }

  return (
    <>
      <Grid container>
        {
          customers.map(customer => (
            <Grid item xs={12} md={4} >
              <CustomerCard
                id={customer.id}
                avatar={customer.avatar}
                name={customer.first_name}
                lastname={customer.last_name}
                email={customer.email}
                className={classes.card}
                onRemoveCustomer={handleRemoveCustomer}
                onEditCustomer={handleEditCustomer}
              />
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}


export default List