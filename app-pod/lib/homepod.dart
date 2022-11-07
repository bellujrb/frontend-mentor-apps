import 'package:flutter/material.dart';
import 'package:pod/button.dart';

class HomePod extends StatelessWidget {
  const HomePod({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      // ignore: prefer_const_constructors
      decoration: BoxDecoration(
        image: const DecorationImage(
          image: NetworkImage('https://i.imgur.com/cU7w12T.jpg'),
          fit: BoxFit.cover,
        ),
      ),
      height: double.infinity,
      width: double.infinity,
      child: Column(
        children: <Widget>[
          const SizedBox(
            height: 100,
          ),
          Image.asset(
            'assets/logo.png',
          ),
          const SizedBox(
            height: 40,
          ),
          const Text(
            'PUBLISH YOUR PODCAST',
            style: TextStyle(
              color: Color.fromRGBO(84, 230, 175, 1.0),
              fontSize: 26,
              fontWeight: FontWeight.w400,
              fontFamily: 'Chivo-Light',
            ),
          ),
          const SizedBox(
            height: 10,
          ),
          const Text(
            'EVERYWHERE.',
            style: TextStyle(
              color: Colors.white,
              fontSize: 26,
              fontWeight: FontWeight.w400,
              fontFamily: 'Chivo-Light',
            ),
          ),
          const SizedBox(
            height: 30,
          ),
          const Text(
            'Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!',
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Color.fromRGBO(194, 203, 229, 1.0),
              fontSize: 15,
              fontWeight: FontWeight.w400,
              fontFamily: 'Chivo-Light',
            ),
          ),
          const SizedBox(
            height: 60,
          ),
          Row(
            children: [
              const SizedBox(
                width: 30,
              ),
              Image.asset('assets/spotify.png'),
              const SizedBox(
                width: 30,
              ),
              Image.asset('assets/apple.png'),
              const SizedBox(
                width: 30,
              ),
              Image.asset('assets/google.png'),
              const SizedBox(
                width: 30,
              ),
              Image.asset('assets/pocket.png'),
            ],
          ),
          const SizedBox(
            height: 40,
          ),
          const Button(),
          const SizedBox(
            height: 20,
          ),
          const Button(
            color: Color.fromRGBO(84, 230, 175, 1.0),
            text: 'Request Access',
            icon: Icons.developer_mode,
          ),
        ],
      ),
    );
  }
}
