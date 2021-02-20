import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const taskTemp = {
        id: 0,
        text: 'Ida paraBala faculdade',
        day: '12 de março as 14h',
        reminder: true,
     }
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button 
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
