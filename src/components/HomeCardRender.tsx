import { Linking, Text, TouchableOpacity, View } from 'react-native';
import { homeStyles } from '../styles/homeStyles';
import { getTags } from '../mocks/Get';
import { TagTypeIcon } from '../../assets/icons/TagType';

const styles = homeStyles;

export const homeRenderTag = ({ item }: { item: (typeof getTags)[0] }) => (
  <View style={styles.card}>
    <View
      style={{
        position: 'absolute',
        left: -10,
        top: -20,
        backgroundColor: '#d9f0e4',
        padding: 8,
        borderRadius: 20
      }}>
      <Text style={{ color: '#2D9C8F', fontWeight: 600 }}>{item.type}</Text>
    </View>
    <View style={styles.cardHeader}>
      <View style={styles.iconWrapper}>
        <TagTypeIcon />
      </View>
      <Text style={styles.tagName}>{item.name}</Text>
    </View>
    <Text style={styles.tagType}>Socials</Text>
    {item.links.map(link => (
      <TouchableOpacity
        key={link.name}
        onPress={() => Linking.openURL(link.url)}
        style={styles.linkButton}>
        <Text style={styles.link}>{link.name}</Text>
      </TouchableOpacity>
    ))}
    <View style={styles.pingContainer}>
      <Text style={styles.pingText}>Last pinged at: {item.lastPinged}</Text>
    </View>
  </View>
);
