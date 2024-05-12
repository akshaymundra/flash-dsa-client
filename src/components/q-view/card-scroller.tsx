import styles from '@/styles/card-scroller.module.css'
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { DataRowProps } from '@/types';
import QView from './q-view';
import { motion, AnimatePresence } from 'framer-motion';
import { cardScrollFromLeft, cardScrollFromRight } from '@/animation-variants';

interface CardScrollerProps {
    data: DataRowProps[];
}

const CardScroller: React.FC<CardScrollerProps> = ({
    data
}) => {

    const [currentCard, setCurrentCard] = useState(0);

    const [variant, setVariant] = useState(cardScrollFromRight);

    return (
        <div className={`flex-1 flex flex-col`}>
            <div className={`${styles.carousal} flex-1`}>
                {data?.map((item, index) => (
                    <AnimatePresence mode='popLayout'>
                        {index === currentCard &&
                            <motion.div
                                key={index}
                                variants={variant}
                                initial='hidden'
                                animate='enter'
                                exit='exit'
                                transition={{ duration: 0.4 }}
                                className={`${styles.q_card}`}
                            >
                                <QView
                                    data={item}
                                    index={index}
                                />
                            </motion.div>
                        }
                    </AnimatePresence>
                ))}
            </div>


            <div className={`${styles.scroll_buttons} flex gap-4 justify-center items-center`}>
                <div className='shadow-lg'>
                    <Button
                        className={`h-6 ${styles.scroll_button}`}
                        onClick={() => {
                            setCurrentCard(currentCard - 1);
                            setVariant(cardScrollFromLeft);
                        }}
                        disabled={currentCard === 0}
                    >
                        <ArrowLeft className='h-4 w-4' />
                    </Button>
                </div>
                <div>
                    <Button
                        className={`${styles.scroll_button} h-6`}
                        onClick={() => {
                            setCurrentCard(currentCard + 1);
                            setVariant(cardScrollFromRight);
                        }}
                        disabled={currentCard === data.length - 1}
                    >
                        <ArrowRight className='h-4 w-4' />
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default CardScroller;