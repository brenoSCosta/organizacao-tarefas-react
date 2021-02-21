import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
   
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button onClick= {()=>props.addTaskVisibility()}
            
            color='green' text='Add'/>
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
