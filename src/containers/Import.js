// fill out this container
import { connect } from 'rect-redux'
import Import from '../component/Import'
import {fetchMakes, deleteMake} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(fetchMakes)
    return {
        fetchMakes: () => dispatch(fetchMakes ()),
        deleteMake: (index) => dispatch(fetchDelete ())
    }
}z