import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = (props) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            {location.pathname === '/' && (
                <Button onClick= {()=>props.addTaskVisibility()}           
                color={props.btTxtAdd ? 'red' : 'green'} 
                text={props.btTxtAdd ? 'Fechar' : 'Adicionar'}/>
            )}
            
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
