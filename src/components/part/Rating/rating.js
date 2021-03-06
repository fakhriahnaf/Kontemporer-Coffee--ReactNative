import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcStarOn, IcStarOff } from '../../../assets'
import Number from '../Number/number'

const Rating = ({number}) => {
    const renderStar = () => {
        let star = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= number) {
            star.push(<IcStarOn key={i} />);
          } else {
            star.push(<IcStarOff key={i} />);
          }
        }
        return star;
      };
    return (
            <View style={styles.ratingContainer}>
              <View style={styles.starContainer}>{renderStar()}</View>
              <Number number={number} type="decimal" style={styles.numberRating} />
            </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    starContainer: {
        flexDirection:'row',
    },
    ratingContainer: {
        flexDirection: 'row',
    },
})
