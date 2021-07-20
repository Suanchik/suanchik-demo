import React from 'react';
import { Suspense } from 'react';
import Prilouder from '../components/coummon/Prilouder/Prilouder';

function WithLaziSuspense(Component) {
            return (props) => {
                return <Suspense fallback={<Prilouder/>}>
                            <Component {...props}/>
                        </Suspense> 
            }
        }

export default WithLaziSuspense;
