import {clamp} from 'beeftools';

const VEGAN_IPSUM = [
  'Miso dressing spiced pumpkin chili muffins Bolivian rainbow pepper Italian linguine puttanesca blueberry chia seed jam Bulgarian carrot peanut butter crunch dill refreshing cucumber splash bento box cinnamon toast cinnamon elderberry kung pao pepper samosa chocolate cookie red pepper appetizer candy cane winter almond milk chai latte raspberries cashew cookies cayenne.',
  'Hazelnut shiitake mocha chocolate heat almond milk peanut butter macadamia nut cookies cocoa black bean wraps kale caesar salad soy milk grenadillo lentils shiitake mushrooms blueberries Italian pepperoncini plums lemongrass fiery fruit peppermint with avocado dressing drizzle cherry cilantro frosted gingerbread bites',
  'Caribbean red habanero pumpkin. Banh mi salad rolls soup mediterranean vegetables mushroom risotto salty veggie burgers winter coconut milk main course homemade balsamic red curry tofu noodles kimchi lemonade zest vegan red amazon pepper garlic sriracha noodles coconut rice salad black beans apple vinaigrette ultimate leek crunchy mint lime taco salsa hemp seeds vitamin glow.',
  'Chili crumbled lentils sparkling pomegranate punch fall cauliflower matcha lingonberry toasted hazelnuts crispy iceberg lettuce one bowl ginger tofu lavender lemonade parsley Thai curry dessert chocolate peanut butter dip thyme street style Thai basil tacos artichoke hearts seeds soba noodles Thai sun pepper smoky maple tempeh glaze edamame hummus lemon figs golden cayenne pepper.',
  'Onion sandwiches burritos spiced peppermint blast lemon tahini dressing sweet potato black bean burrito blackberries shallots enchiladas peaches roasted brussel sprouts banana bread black bean chili dip asian pear cool off creamy cauliflower alfredo sauce edamame hot apples cherries potato guacamole.',
  'Lime scotch bonnet pepper roasted butternut squash lime mango crisp cool cilantro lime vinaigrette sriracha pecans blood orange smash banana bread apricot chilies. Green papaya salad portobello mushrooms spring blueberry pops coconut sugar açai butternut mix Chinese five-spice powder summer fruit salad green tea lime double dark chocolate pine nuts eating together lychee',
  'Mediterranean citrusy hummus falafel bowl overflowing berries sweet potato mediterranean luxury bowl crunchy seaweed falafel bites hearts of palm tomato and basil shaved almonds.',
  'Pomegranate tempeh cherry bomb pepper cranberry spritzer chia seeds red lentil curry lemon lime minty strawberry spinach salad hummus cool cucumbers Malaysian smoked tofu avocado picnic fruit smash maple orange tempeh grapefruit.',
  'Balsamic vinaigrette bruschetta miso turmeric glazed aubergine couscous sweet potato a delicious meal ghost pepper zesty tofu pad thai naga viper sesame soba noodles paprika cozy butternut creamiest rich coconut cream Thai super chili vine tomatoes strawberries overflowing pineapple salsa Southern Italian dark chocolate.',
  'Tofu orange alfalfa sprouts Thai basil curry ginger lemongrass agave green tea chai tea fig arugula cashew salad simmer creamy cauliflower alfredo habanero golden springtime strawberry hearty instant pot fresh dragon fruit jalapeño pasta basil entree banana seitan. Summer walnut mushroom tart salted broccoli seasonal delightful blueberry scones quinoa flatbread kale casserole dark and stormy ultra creamy avocado pesto pesto picnic salad green grapes morning smoothie bowl basmati cozy cinnamon oatmeal Sicilian pistachio pesto red grapes bite sized.',
  'Green onions grains summertime mangos pinch of yum green pepper second course avocado basil pesto coconut ginger carrot spiced juice cumin walnut pesto tart Thai almonds crispy mint coriander udon noodles lemon red lentil soup tahini drizzle chocolate Indian spiced spicy strawberry mango smoothie cremini mushrooms.',
];

export function placeholderText(paragraphs = 1) {
  const count = clamp(1, paragraphs, VEGAN_IPSUM.length);
  return VEGAN_IPSUM.slice(0, count);
}
