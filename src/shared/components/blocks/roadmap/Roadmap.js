import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LayoutContainer } from '../../layout';
import { status, rows } from './data';
import styles from './Roadmap.module.css';

class Roadmap extends PureComponent {
    render() {
        const { className } = this.props;

        return (
            <LayoutContainer id="roadmap" className={ classNames(styles.roadmap, className) }>
                <div className={ styles.title }>Roadmap</div>
                <div className={ styles.table }>
                    <div className={ classNames(styles.tableRow, styles.tableHeader) }>
                        <div className={ classNames(styles.tableCell, styles.itemName) }>Building phase</div>
                        <div className={ styles.itemStatus }>
                            { status.map((el) => {
                                const ElementIcon = el.icon;

                                return (
                                    <div className={ styles.tableCell } key={ el.name }>
                                        <span className={ styles.statusName }>{ el.name }</span>
                                        <ElementIcon className={ styles.statusIcon } />
                                    </div>
                                );
                            }) }
                        </div>
                    </div>
                    { rows.map((el) => (
                        <div className={ styles.tableRow } key={ el.name }>
                            <div className={ classNames(styles.tableCell, styles.itemName) }>
                                { el.name }
                            </div>
                            <div className={ styles.itemStatus }>
                                { el.status.map((stat, index) => (
                                    <div className={ styles.tableCell } key={ index }>
                                        { stat ? '●' : '○' }
                                    </div>
                                )) }
                            </div>
                        </div>
                    )) }
                </div>
            </LayoutContainer>
        );
    }
}

Roadmap.propTypes = {
    className: PropTypes.string,
};

export default Roadmap;
