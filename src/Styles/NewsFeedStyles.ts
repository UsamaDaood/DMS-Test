// Styles
import {
  StyleSheet
} from 'react-native';
import Colors from '../libs/Colors';
export const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  postContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  companyName: {
    fontSize: 14,
    color: Colors.postCompanyColor,
  },
  timestamp: {
    color: Colors.timeStampColor,
    fontSize: 12,
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  dislikeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  likeText: {
    color: Colors.likeText,
  },

  replies: {
    color: Colors.repliesText,
    marginLeft: 10,
  },
  iconImage: {
    width: 25,
    height: 25,
  },
  line: {
    height: 1,
    backgroundColor: Colors.lineColor,
    marginVertical: 10,
  },
});