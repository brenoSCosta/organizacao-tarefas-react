import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
   
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button onClick= {()=>props.addTaskVisibility()}           
            color={props.btTxtAdd ? 'red' : 'green'} 
            text={props.btTxtAdd ? 'Fechar' : 'Adicionar'}/>
        </header>
    )
}

Header.defaultProps = {
    title : 'Default'
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
